import { FC, ReactNode } from "react";
import Block from "../../../../../components/Block/Block";


export interface ModuleProps {
    children?: ReactNode
    className?: string
}

const Module: FC<ModuleProps> = (props) => {
    const { children }  = props   

    return (
        <Block {...props}>
            {children}
        </Block>   
    );
};

export default Module;



