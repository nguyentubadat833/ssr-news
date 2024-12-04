import {IMenuItem} from "~/typing/IMenuItem";

export default defineEventHandler((event) => {
    const items: IMenuItem[] = [
        {label: 'Thời sự', key: 'thoi-su'},
        {label: 'Thế giới', key: 'the-goi'},
        {label: 'Thể thao', key: 'the-thao'},
        {label: 'Giải trí', key: 'giai-tri'}
    ]
    return items
})
