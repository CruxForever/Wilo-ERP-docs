# ERD

The entity relationship diagram below is rendered on the fly from the DOT source stored in `erd/schema.dot`. The page loads the definition and converts it to SVG in the browser, so keeping the DOT file up to date is enough to refresh the picture.

<div class="graphviz" data-graphviz-src="{{ base_url }}/erd/schema.dot">
  <em>Loading ERD graph...</em>
</div>

## Maintenance

- Edit `docs/erd/schema.dot` to change the diagram structure.
- The renderer relies on Viz.js and logs messages prefixed with `[Graphviz]` in the browser console if something goes wrong.
