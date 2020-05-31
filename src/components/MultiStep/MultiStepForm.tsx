import React, { memo, useMemo } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { IObjInput } from './MultiStepWrapper';
import { useState } from 'react';

export interface IMultiStepForm {
  handleChange?: (
    name: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  input?: any;
}

const MultiStepForm: React.FC<IMultiStepForm> = ({ input, handleChange }) => {
  const jsx = useMemo(() => {
    let jsx = [];
    for (let key in input) {
      let { title, placeholder, type, required, description, group } = input[
        key
      ];
      let formControl;
      let groupFormControl;
      switch (type) {
        case 'tel':
          formControl = (
            <>
              <Form.Control
                type={type}
                placeholder={placeholder}
                required={!!required}
                pattern="/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/"
                onChange={handleChange ? handleChange(key) : () => {}}
              />
              <Form.Text className="text-muted">
                Введите номер телефона в формате: +7(903)888-88-88
              </Form.Text>
            </>
          );
          break;
        case 'switch':
          formControl = (
            <Form.Check
              type={type}
              id={key}
              label={description}
              onChange={handleChange ? handleChange(key) : () => {}}
            />
          );
          break;
        case 'checkbox':
          formControl = (
            <Form.Check
              type={type}
              id={key}
              label={description}
              onChange={handleChange ? handleChange(key) : () => {}}
            />
          );
          break;
        default:
          formControl = (
            <>
              <Form.Control
                type={type}
                placeholder={placeholder}
                required={!!required}
                onChange={handleChange ? handleChange(key) : () => {}}
              />

              {!!description ? (
                <Form.Text className="text-muted">{description}</Form.Text>
              ) : undefined}
            </>
          );
      }
      jsx.push(
        <Form.Group controlId={key} key={key}>
          {!!title ? <Form.Label>{title}</Form.Label> : undefined}
          {formControl}
        </Form.Group>,
      );
    }
    return jsx;
  }, [input]);
  return <>{jsx.map((item) => item)}</>;
};

export default memo(MultiStepForm);
