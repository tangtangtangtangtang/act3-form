/*
 * @Author: xiaozhuo
 * @Date: 2020-07-28 21:08:01
 * @LastEditTime: 2020-07-28 21:10:27
 * @LastEditors: xiaozhuo
 * @Description:
 * @Enuma Elish
 */
import { Input, DatePicker } from 'antd'

export const formItemLayout = {
    colon: false,
    row: {
        align: 'top'
    },
    labelCol: {
        span: 4,
        md: { span: 6 },
        lg: { span: 4 },
    },
    wrapperCol: {
        span: 20,
        md: { span: 18 },
        lg: { span: 20 },
    },
};

export const FORM_ITEM_MAP = new Map()
    .set('input', Input)
    .set('textarea', Input.TextArea)
    .set('date', DatePicker)