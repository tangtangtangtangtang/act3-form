/*
 * @Author: xiaozhuo
 * @Date: 2020-07-28 21:06:11
 * @LastEditTime: 2020-07-28 21:25:11
 * @LastEditors: xiaozhuo
 * @Description:
 * @Enuma Elish
 */
/*
 * @Author: xiaozhuo
 * @Date: 2020-05-21 10:29:28
 * @LastEditTime: 2020-07-23 19:00:18
 * @LastEditors: xiaozhuo
 * @Description:
 * @Enuma Elish
 */
import { FormProps } from 'antd/lib/form/Form';

export interface ObjectAny {
    [key: string]: any
}

export interface WrappedFormProps {
    wrappedComponentRef?: (r: any) => void;
}

export interface IMapEachItem {
    type?: string;
    prefix?: any;
    suffix?: any;
    render?: () => void;
    // type是title时需要
    name?: string;
    // Form.Item的Option
    option?: FormProps;
    // 透传给组件的option
    penetrateOption?: ObjectAny;
}

// 4.x Interface
export interface IMapFormItem {
    item: IMapEachItem;
    conf?: ObjectAny;
    formItemLayout?: {
        colon?: boolean;
        labelCol?: ObjectAny;
        wrapperCol?: ObjectAny;
    };
}
