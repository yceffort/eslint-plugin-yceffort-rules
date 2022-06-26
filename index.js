module.exports = {
  rules: {
    'default-import': (context) => ({
      ImportDeclaration: (node) => {
        const found = node.specifiers.find(
          (i) => i.type === 'ImportDefaultSpecifier',
        )

        if (found) {
          const { options } = context
          const option = options.find((opt) => 'path' in opt)
          const paths = option.path || []

          if (paths.includes(node.source.value)) {
            context.report(node, `import ${node.source.value}는 하면 안되잉`)
          }
        }
      },
    }),
    'var-length': (context) => ({
      VariableDeclarator: (node) => {
        const { options } = context
        const allowedList = options.find((opt) => 'allowed' in opt)

        const allowed = allowedList.allowed || []

        if (node.id.name.length < 2 && !allowed.includes(node.id.name)) {
          context.report(
            node,
            `Variable names should be longer than 1 character ${node.type}`,
          )
        }
      },
    }),
  },
}
