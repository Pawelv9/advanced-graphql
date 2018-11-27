module.exports = {
    Query: {
        onePerson() {
            return {
                name: 'Jamie'
            }
        }
    },
    Mutation: {
        newPerson(_, args, ctx, info) {
            const name = args.input.name
            return {
                name
            }
        }
    }
}