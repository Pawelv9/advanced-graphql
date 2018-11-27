// resolve the query you made
module.exports = {
  Query: {
    oneMessage() {
      return {
        text: 'Yep'
      }
    }
  }
  // Mutation: {
  //   newMessage(_, args, ctx, info) {
  //     const text = args.input.text
  //     return {text}
  //   }
  // }

  }
