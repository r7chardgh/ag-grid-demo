'use client'
import { IUser } from '@/lib/definition';
import { AllCommunityModule, ColDef, GridApi, GridReadyEvent, IDatasource, IGetRowsParams, IServerSideDatasource, ModuleRegistry, PaginationChangedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react'
import { useCallback, useEffect, useState } from 'react'
import usePaginationStore from '@/lib/store/paginationStore';
import { getDummyUsersByLimit } from '@/lib/serverActions';
ModuleRegistry.registerModules([AllCommunityModule]);

const UsersGrid = () => {
    const { page, limit, totalRows, setPage, setLimit, setTotalRows } = usePaginationStore();
    const [gridApi, setGridApi] = useState<any>(null);


    const colDefs: ColDef<IUser>[] = [
        { headerName: 'ID', field: 'id', sortable: true, filter: true },
        { headerName: 'Username', field: 'username', sortable: true, filter: true },
        { headerName: 'Role', field: 'role', sortable: true, filter: true },
        {
            headerName: 'Crypto Coin',
            field: 'crypto.coin',
            sortable: true,
            filter: true,
        },
        {
            headerName: 'Crypto Wallet',
            field: 'crypto.wallet',
            sortable: true,
            filter: true,
        },
        {
            headerName: 'Crypto Network',
            field: 'crypto.network',
            sortable: true,
            filter: true,
        },
    ];

    const onPaginationChanged = useCallback((event: PaginationChangedEvent) => {
        if (event.api) {
            const currentPage = event.api.paginationGetCurrentPage() + 1;
            setLimit(event.api.paginationGetPageSize())
            setPage(currentPage);
        }
    }, [setPage, setLimit]);

    useEffect(() => {
        if (gridApi) {
            const datasource: IDatasource = {
                getRows: async (params: IGetRowsParams) => {
                    const currentPage = Math.ceil(params.endRow / limit);
                    try {
                        const data = await getDummyUsersByLimit(limit, currentPage);
                        params.successCallback(data.users, data.total);
                    } catch (error) {
                        params.successCallback([], 0);
                    }
                },
            };
            gridApi.setGridOption('datasource', datasource);
        }
    }, [gridApi, limit, setTotalRows]);

    useEffect(() => {
        if (gridApi && limit) {

            // gridApi.paginationSetPageSize(limit);f
            setPage(1);
            gridApi.paginationGoToPage(0);
            // Purge cache to reload with new page size
            gridApi.purgeInfiniteCache();
        }
    }, [limit, gridApi, setPage]);

    const onGridReady = (params: GridReadyEvent) => {
        setGridApi(params.api);
    };


    // const handlePageChange = (newPage: number) => {
    //     setPage(newPage);
    //     if (gridApi) {
    //         gridApi.paginationGoToPage(newPage - 1);
    //     }
    // };

    // const handleLimitChange = (newLimit: number) => {
    //     setLimit(newLimit);
    // };

    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
                <AgGridReact
                    columnDefs={colDefs}
                    rowModelType="infinite"
                    pagination={true}
                    paginationPageSize={limit}
                    cacheBlockSize={limit}
                    onGridReady={onGridReady}
                    onPaginationChanged={onPaginationChanged}
                    paginationPageSizeSelector={[10, 30, 60]}
                />
            </div>
            {/* <div style={{ marginTop: 10 }}>
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span> Page {page} </span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page * limit >= totalRows}
                >
                    Next
                </button>
                <select
                    value={limit}
                    onChange={(e) => handleLimitChange(Number(e.target.value))}
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div> */}
        </div>
    );

}

export default UsersGrid