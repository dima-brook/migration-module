import Address from '../openZeppelin/utils/Address'
import Context from '../openZeppelin/utils/Context'
import Strings from '../openZeppelin/utils/Strings'
import ERC165 from '../openZeppelin/utils/introspection/ERC165'
import IERC165 from '../openZeppelin/utils/introspection/IERC165'
import IERC721Metadata from '../openZeppelin/extensions/IERC721Metadata'
import IERC721 from '../openZeppelin/IERC721'
import ERC721Token from '../openZeppelin/ERC721'
import IERC721Receiver from '../openZeppelin/IERC721Receiver'
// contracts always on server - one source of truth
export const ERC721 = {
    folders: [
        '/openZeppelin', 
        '/openZeppelin/utils', 
        '/openZeppelin/extensions', 
        '/openZeppelin/utils/introspection'
    ],
    libs: [
        {
            location: '/openZeppelin/utils/Address.sol',
            code: Address
        },
        {
            location: '/openZeppelin/utils/Context.sol',
            code: Context
        },
        {
            location: '/openZeppelin/utils/Strings.sol',
            code: Strings
        },
        {
            location: '/openZeppelin/utils/Address.sol',
            code: Address
        },
        {
            location: '/openZeppelin/utils/introspection/ERC165.sol',
            code: ERC165
        },
        {
            location: '/openZeppelin/utils/introspection/IERC165.sol',
            code: IERC165
        },
        {
            location: '/openZeppelin/extensions/IERC721Metadata.sol',
            code: IERC721Metadata
        },
        {
            location: '/openZeppelin/IERC721.sol',
            code: IERC721
        },
        {
            location: '/openZeppelin/ERC721.sol',
            code: ERC721Token
        },
        {
            location: '/openZeppelin/IERC721Receiver.sol',
            code: IERC721Receiver
        }
    ]
}