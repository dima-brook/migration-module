import Address from '../openzeppelin/utils/Address'
import Context from '../openzeppelin/utils/Context'
import Strings from '../openzeppelin/utils/Strings'
import ERC165 from '../openzeppelin/utils/introspection/ERC165'
import IERC165 from '../openzeppelin/utils/introspection/IERC165'
import IERC721Metadata from '../openzeppelin/extensions/IERC721Metadata'
import IERC721 from '../openzeppelin/IERC721'
import ERC721Token from '../openzeppelin/ERC721'
import IERC721Receiver from '../openzeppelin/IERC721Receiver'
// contracts always on server - one source of truth
export const ERC721 = {
    folders: [
        '/openzeppelin', 
        '/openzeppelin/utils', 
        '/openzeppelin/extensions', 
        '/openzeppelin/utils/introspection'
    ],
    libs: [
        {
            location: '/openzeppelin/utils/Address.sol',
            code: Address
        },
        {
            location: '/openzeppelin/utils/Context.sol',
            code: Context
        },
        {
            location: '/openzeppelin/utils/Strings.sol',
            code: Strings
        },
        {
            location: '/openzeppelin/utils/Address.sol',
            code: Address
        },
        {
            location: '/openzeppelin/utils/introspection/ERC165.sol',
            code: ERC165
        },
        {
            location: '/openzeppelin/utils/introspection/IERC165.sol',
            code: IERC165
        },
        {
            location: '/openzeppelin/extensions/IERC721Metadata.sol',
            code: IERC721Metadata
        },
        {
            location: '/openzeppelin/IERC721.sol',
            code: IERC721
        },
        {
            location: '/openzeppelin/ERC721.sol',
            code: ERC721Token
        },
        {
            location: '/openzeppelin/IERC721Receiver.sol',
            code: IERC721Receiver
        }
    ]
}