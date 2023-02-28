import { useEffect } from 'react';

import { Collapse, Tabs, Typography, Tooltip, Tag, Switch } from 'antd';
import {   Flex } from '@tremor/react';

const { Title } = Typography;
const { Panel } = Collapse;

const losEstandares = (est) => {
    return <>
        <Flex>     
            <Title level={5}>{est.titulo}</Title>
            <Tooltip title={est.objetivo}>
                <Tag color="#2db7f5">+</Tag>
            </Tooltip>
        </Flex>
        {est.focos.map((obj) => 
            {           
                return <Focos obj={obj}/>
            })
        }
    </>
}


const losFocos = (obj) => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    
    console.log(obj);
    return <Flex justifyContent='justify-between'>
        <p>{obj.descripcion}</p>
        <Switch 
            defaultChecked 
            onChange={onChange} 
        />
    </Flex>
}

const Focos = (props) => {
    const {obj} = props;
    const items = [];
    return (
        <div className="bg-sky-100">
        <Collapse size="small">
            <Panel header={"FOCO: "+obj.titulo} key={obj.id}>
            <p>DESCRIPTORES</p>

            {obj.descriptores.forEach((des) => {
                items.push({ label: des.numero, children: losFocos(des), key: des.id });
            })}

            <Tabs 
                type="line"
                tabPosition="left"
                defaultActiveKey="1" 
                size="small"
                items={items} 
                onChange={null} />
            </Panel>
        </Collapse>
    </div>

    );
}



const Acordeon = (props) => {
    const {data} = props;
    
    useEffect(() => {
        // console.log(data);
    }, []);
    
    return  <div className="bg-sky-200">
        <Collapse size="small" accordion>
            {data.map((obj, i) => {
                const items = [];
                return (
                    <Panel header={obj.dominio} key={i}>
                        <Title level={5}> - {obj.titulo}</Title>
                        {obj.estandares.forEach((est) => {
                            items.push({ label: est.estandar, children: losEstandares(est), key: est.id });
                        })}

                        <Tabs 
                            type="line"
                            tabPosition="left"
                            defaultActiveKey="1" 
                            size="small"
                            items={items} 
                            onChange={null} />
                    </Panel>);
            })}
        </Collapse>
            </div>
};
export default Acordeon;