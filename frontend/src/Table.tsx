import React from 'react'
import { Table } from 'reactstrap'

const uppercaseFirst = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const TableList = (props: any) => {

    return (
        <Table>
            <thead>
                <tr>
                    {Object.keys(props.data[0]).map((th, key) =>
                        <th key={key}>{uppercaseFirst(th)}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {props.data.map((row: any, index: any) =>
                    <tr key={index}>
                        {Object.values(row).map((value, key) =>
                            <td key={key}><>{value}</></td>
                        )}
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default TableList
