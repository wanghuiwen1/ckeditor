

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Codelightediting from './codelightediting';
import Codelightui from './codelightui';
export default class EasyImage extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires() {
        return [
            Codelightediting,Codelightui
        ];
    }

    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'codeLight';
    }
}
