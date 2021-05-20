import { loadTypedefs } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

async function load() {
    const schema = await loadTypedefs('schema/main.graphql', {
        loaders: [
            new GraphQLFileLoader()
        ]
    })

    console.log(schema[0].rawSDL)
}

load();