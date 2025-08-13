# ag-grid-react demo

## Build Log
### 13/08/2025
1. build ag-grid with dummy data , fetch from https://dummyjson.com/users
2. basic pagination

### 14/08/2025
1. add cellRenderer - display user image
2. add cellClassRules - assign diff bg color for each user role
3. add rowClassRules - row bg color will be purple if user has AB- blood type
4. add editable boolean, remove sortable & filter for 'infinite' row mode type grid
5. add css for Mobile Device Pagination Bar Rendering Issue
6. add themeQuartz

## remarks
1. ag-grid has enterprise feature - support server side row model (SSRM) (lazy loading from server insteads of load all data to client)
2. nextjs server action can force cache repeated data
3. headerCheckbox is only available if using 'clientSide' or 'serverSide' 
4. 'infinite' mode can not using filtering & sorting, because it doesn't know the entire dataset