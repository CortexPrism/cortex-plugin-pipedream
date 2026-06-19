// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const pipe_trigger_workflowTool: Tool = {
  definition: {
    name: 'pipe_trigger_workflow',
    description: 'Trigger Pipedream workflow',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[pipedream] pipe_trigger_workflow executed');
      return ok('pipe_trigger_workflow', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'pipe_trigger_workflow',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const pipe_list_connectorsTool: Tool = {
  definition: {
    name: 'pipe_list_connectors',
    description: 'List available Pipedream connectors',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[pipedream] pipe_list_connectors executed');
      return ok('pipe_list_connectors', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'pipe_list_connectors',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const pipe_get_resultTool: Tool = {
  definition: {
    name: 'pipe_get_result',
    description: 'Get workflow execution result',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[pipedream] pipe_get_result executed');
      return ok('pipe_get_result', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'pipe_get_result',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-pipedream] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-pipedream] Unloading...');
}
export const tools: Tool[] = [
  pipe_trigger_workflowTool,
  pipe_list_connectorsTool,
  pipe_get_resultTool,
];
