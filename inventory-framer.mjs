import { connect } from "framer-api";

const projectUrl = process.env.FRAMER_PROJECT_URL;
const apiKey = process.env.FRAMER_API_KEY;
if (!projectUrl || !apiKey) throw new Error("Missing FRAMER_PROJECT_URL or FRAMER_API_KEY");

const framer = await connect(projectUrl, apiKey);
const safe = async (fn, fallback = null) => {
  try { return await fn(); } catch (error) { return { error: String(error?.message ?? error) }; }
};
const summarize = (node) => ({
  id: node?.id ?? null,
  type: node?.constructor?.name ?? null,
  name: node?.name ?? null,
  path: node?.path ?? null,
  visible: node?.visible ?? null,
  width: node?.width ?? null,
  height: node?.height ?? null,
  text: node?.constructor?.name === "TextNode" ? safe(() => node.getText()) : null
});
const walk = async (node, depth = 0) => {
  const item = summarize(node);
  if (depth >= 8 || !node?.id) return item;
  const children = await safe(() => framer.getChildren(node.id), []);
  item.children = Array.isArray(children) ? await Promise.all(children.map((child) => walk(child, depth + 1))) : children;
  return item;
};

try {
  const [projectInfo, publishInfo, pages, collections, codeFiles, root] = await Promise.all([
    framer.getProjectInfo(),
    safe(() => framer.getPublishInfo()),
    safe(() => framer.getNodesWithType("WebPageNode"), []),
    safe(() => framer.getCollections(), []),
    safe(() => framer.getCodeFiles(), []),
    safe(() => framer.getCanvasRoot())
  ]);
  const result = {
    projectInfo,
    publishInfo,
    pages: Array.isArray(pages) ? await Promise.all(pages.map((page) => walk(page))) : pages,
    collections: Array.isArray(collections) ? collections.map((c) => ({ id: c.id ?? null, name: c.name ?? null })) : collections,
    codeFiles: Array.isArray(codeFiles) ? codeFiles.map((f) => ({ id: f.id ?? null, name: f.name ?? null, path: f.path ?? null })) : codeFiles,
    canvasRoot: root ? await walk(root) : root
  };
  console.log(JSON.stringify(result, null, 2));
} finally {
  await framer.disconnect();
}
