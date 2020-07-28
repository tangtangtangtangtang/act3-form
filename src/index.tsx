import React from 'react';
import { Form, Row, Col } from 'antd';
// import omit from 'lodash-es/omit'
import pick from 'lodash-es/pick'
import './index.less';

import { IMapFormItem, IMapEachItem } from './model';
import { FORM_ITEM_MAP, formItemLayout as defaultFormItemLayout } from './config';

type LabelAndInputProps = {
    input?: any
    label?: any
    formItemLayout?: {
        row?: any
        labelCol?: any
        wrapperCol?: any
    }
}

export const LabelAndInput = ({ input = '', label = '', formItemLayout = {} }: LabelAndInputProps) => (
    <Row className='use-form-layout-each-row' {...formItemLayout.row}>
        <Col className='use-form-layout-label-col' {...formItemLayout.labelCol}>
            {label}
        </Col>
        <Col className='use-form-layout-wrapper-col' {...formItemLayout.wrapperCol}>
            {input}
        </Col>
    </Row>
)

// 生产Form.Item里面的收入项
export const createEachMapFormItem = (item: IMapEachItem) => {
    if (typeof item.render === 'function') {
        return item.render;
    }
    return FORM_ITEM_MAP.get(item.type.toLocaleLowerCase());
};

export const mapFormItem = ({ item, formItemLayout = defaultFormItemLayout, conf }: IMapFormItem) => {
    const EachItem = createEachMapFormItem(item);
    return (
        <React.Fragment key={item.name || item.option.name}>
            {['title'].indexOf(item.type) === -1 &&
                <>
                    {
                        typeof item?.option?.shouldUpdate === 'function' ?
                            <Form.Item
                                {...pick(item.option, ['shouldUpdate'])}
                                noStyle
                            >
                                {
                                    (form) => (
                                        <>
                                            {item.prefix}
                                            <LabelAndInput
                                                input={
                                                    <Form.Item
                                                        {...item.option}
                                                        noStyle
                                                    >
                                                        <EachItem
                                                            {...item.penetrateOption}
                                                            conf={conf}
                                                            form={form}
                                                        />
                                                    </Form.Item>
                                                }
                                                label={item?.option?.label}
                                                formItemLayout={formItemLayout}
                                            />
                                            {item.suffix}
                                        </>
                                    )
                                }
                            </Form.Item>
                            :
                            <>
                                {item.prefix}
                                <LabelAndInput
                                    input={
                                        <Form.Item {...formItemLayout} {...item.option} noStyle>
                                            <EachItem
                                                {...item.penetrateOption}
                                                conf={conf}
                                            />
                                        </Form.Item>
                                    }
                                    label={item?.option?.label}
                                    formItemLayout={formItemLayout}
                                />
                                {item.suffix}
                            </>
                    }
                </>
            }
            {
                item.type === 'title' &&
                <LabelAndInput
                    label={
                        <h3
                            style={{
                                fontSize: '18px',
                                lineHeight: '18px',
                                fontFamily: 'PingFangSC, PingFangSC-Medium',
                                color: '#303030',
                            }}
                        >
                            {item.name}
                        </h3>
                    }
                    formItemLayout={formItemLayout}
                />
            }
        </React.Fragment>
    );
};

export const MAP = FORM_ITEM_MAP