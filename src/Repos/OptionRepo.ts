import LocalForage from 'localforage';

export default class OptionRepo implements IOptionRepo {

    async init(){
        LocalForage.config();
    }

    async loadOptions(): Promise<Option[]> {
        return await LocalForage.getItem('OptionDB');
    }
}