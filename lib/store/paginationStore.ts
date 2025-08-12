import { create } from 'zustand';

interface IPagination {
  page: number;
  limit: number;
  totalRows: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setTotalRows: (totalRows: number) => void;
}
const usePaginationStore = create<IPagination>((set) => ({
  page: 1,
  limit: 10,
  totalRows: 0,
  setPage: (page: number) => set({ page }),
  setLimit: (limit: number) => set({ limit }),
  setTotalRows: (totalRows: number) => set({ totalRows }),
}));

export default usePaginationStore;