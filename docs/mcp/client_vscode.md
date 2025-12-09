# VS Code MCP client (example)

1) Install dependencies (ideally inside your virtualenv): `pip install -r tools/mcp/requirements.txt`.
2) Add a server entry to VS Code `settings.json` (Model Context Protocol extension):

```jsonc
{
  "modelContextProtocol.servers": {
    "wilo-erp": {
      "command": "python",
      "args": ["tools/mcp_server.py"],
      "cwd": "${workspaceFolder}",
      "env": {
        "DB_PATH": "01_DB-Data/costcalc.db"
      }
    }
  }
}
```

- Resources exposed: `wilo-erp://project/overview`, `wilo-erp://project/architecture`, `wilo-erp://project/code-map`, `wilo-erp://project/runbooks`, `wilo-erp://db/table/{name}`.
- Tools exposed: `search`, `preview`, `list_tables`, `sql`.
- DB is opened read-only; override env `DB_PATH` if you keep several copies of `costcalc.db`.
