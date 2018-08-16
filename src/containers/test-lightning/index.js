import React, { Component } from 'react';
import DataTable from 'design-system-react/components/data-table';
import DataTableColumn from 'design-system-react/components/data-table/column';
import DataTableCell from 'design-system-react/components/data-table/cell';
import DataTableRowActions from 'design-system-react/components/data-table/row-actions';
import IconSettings from 'design-system-react/components/icon-settings';

const CustomDataTableCell = ({ children, ...props }) => (
    <DataTableCell title={children} {...props} >
        <a
            href="javascript:void(0);"
            onClick={(event) => {
                event.preventDefault();
            }}
        >{children}</a>
    </DataTableCell>
);
CustomDataTableCell.displayName = DataTableCell.displayName;

export default class PassengerTable extends Component {

    state = {
        sortColumn: 'opportunityName',
        sortColumnDirection: {
            opportunityName: 'asc'
        },
        items: [
            {
                id: '8IKZHZZV80',
                name: 'PHO-NGOEN NUTCHANON MR.',
                phone: '0814748374',
                email: 'NUTHSK // SHCDUS.COM',
            },
            {
                id: '8IKZHZZV81',
                name: 'WILEPANA PRAMOTE MR.',
                phone: '0985738373',
                email: 'dfsdf@doidd.com',
            },
            {
                id: '8IKZHZZV82',
                name: 'WILEPANA PRAMOTE MR.',
                phone: '0985738373',
                email: 'dfsdf@doidd.com',
            },
        ],
        selection: []
    }

    handleChanged = (selection) => {
        this.setState({ selection });
    }

    handleRowAction = (item, action) => {
        console.log(item, action);
    }

    handleSort = (sortColumn, ...rest) => {
        if (this.props.log) { this.props.log('sort')(sortColumn, ...rest); }

        const sortProperty = sortColumn.property;
        const sortDirection = sortColumn.sortDirection;
        const newState = {
            sortColumn: sortProperty,
            sortColumnDirection: {
                [sortProperty]: sortDirection
            },
            items: [...this.state.items]
        };

        // needs to work in both directions
        newState.items = newState.items.sort((a, b) => {
            let val = 0;

            if (a[sortProperty] > b[sortProperty]) {
                val = 1;
            }
            if (a[sortProperty] < b[sortProperty]) {
                val = -1;
            }

            if (sortDirection === 'desc') {
                val *= -1;
            }

            return val;
        });

        this.setState(newState);
    }

    render() {
        return (
            <div>
                <IconSettings iconPath="/assets/icons">
                    <DataTable
                        items={this.state.items}
                        id="DataTableExample-2"
                        onChange={this.handleChanged}
                        onSort={this.handleSort}
                        selection={this.state.selection}
                        selectRows
                        stacked
                    >
                        <DataTableColumn
                            isSorted={this.state.sortColumn === 'opportunityName'}
                            label="Name"
                            primaryColumn
                            property="name"
                            sortable
                            sortDirection={this.state.sortColumnDirection.opportunityName}
                        >
                            <CustomDataTableCell />
                        </DataTableColumn>
                        <DataTableColumn
                            label="Phone"
                            property="phone"
                        />
                        <DataTableColumn
                            label="Email"
                            property="email"
                        />
                    </DataTable>
                </IconSettings>
            </div>)
    }
}