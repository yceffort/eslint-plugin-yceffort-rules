module.exports = {
  rules: {
    'import-react': (context) => ({
      ImportDeclaration: (node) => {
        const found = node.specifiers.find(
          (i) => i.type === 'ImportDefaultSpecifier',
        )

        if (found) {
          if (found.local.name === 'React') {
            context.report(node, 'import React 하면 안되잉')
          }
        }
      },
    }),
    'var-length': (context) => ({
      VariableDeclarator: (node) => {
        if (node.id.name.length < 2) {
          context.report(
            node,
            `Variable names should be longer than 1 character ${node.type}`,
          )
        }
      },
    }),
  },
}
