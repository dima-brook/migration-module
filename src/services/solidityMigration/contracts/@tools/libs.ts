import Address from '../openzeppelin/utils/Address'
import Context from '../openzeppelin/utils/Context'
import Strings from '../openzeppelin/utils/Strings'
import ERC165 from '../openzeppelin/utils/introspection/ERC165'
import IERC165 from '../openzeppelin/utils/introspection/IERC165'
import IERC721Metadata from '../openzeppelin/extensions/IERC721Metadata'
import IERC721 from '../openzeppelin/IERC721'
import ERC721Token from '../openzeppelin/ERC721'
import IERC721Receiver from '../openzeppelin/IERC721Receiver'
import Migration, { deployMigration } from '../Migration'

// contracts always on server - one source of truth
export const ERC721 = {
    folders: [
        '/migrations',
        '/contracts',
        '/test',
        '/contracts/openzeppelin', 
        '/contracts/openzeppelin/utils', 
        '/contracts/openzeppelin/extensions', 
        '/contracts/openzeppelin/utils/introspection'
    ],
    libs: [
        {
            location: '/contracts/openzeppelin/utils/Address.sol',
            code: Address
        },
        {
            location: '/contracts/openzeppelin/utils/Context.sol',
            code: Context
        },
        {
            location: '/contracts/openzeppelin/utils/Strings.sol',
            code: Strings
        },
        {
            location: '/contracts/openzeppelin/utils/Address.sol',
            code: Address
        },
        {
            location: '/contracts/openzeppelin/utils/introspection/ERC165.sol',
            code: ERC165
        },
        {
            location: '/contracts/openzeppelin/utils/introspection/IERC165.sol',
            code: IERC165
        },
        {
            location: '/contracts/openzeppelin/extensions/IERC721Metadata.sol',
            code: IERC721Metadata
        },
        {
            location: '/contracts/openzeppelin/IERC721.sol',
            code: IERC721
        },
        {
            location: '/contracts/openzeppelin/ERC721.sol',
            code: ERC721Token
        },
        {
            location: '/contracts/openzeppelin/IERC721Receiver.sol',
            code: IERC721Receiver
        },
        {
            location: '/contracts/Migration.sol',
            code: Migration
        },
        {
            location: '/migrations/1_migration.js',
            code: deployMigration
        }
    ]
}