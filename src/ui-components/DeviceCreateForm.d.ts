/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DeviceCreateFormInputValues = {
    name?: string;
    address?: string;
    is_active?: boolean;
};
export declare type DeviceCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    is_active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeviceCreateFormOverridesProps = {
    DeviceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    is_active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DeviceCreateFormProps = React.PropsWithChildren<{
    overrides?: DeviceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DeviceCreateFormInputValues) => DeviceCreateFormInputValues;
    onSuccess?: (fields: DeviceCreateFormInputValues) => void;
    onError?: (fields: DeviceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeviceCreateFormInputValues) => DeviceCreateFormInputValues;
    onValidate?: DeviceCreateFormValidationValues;
} & React.CSSProperties>;
export default function DeviceCreateForm(props: DeviceCreateFormProps): React.ReactElement;
