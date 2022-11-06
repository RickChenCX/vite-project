import "pinia";

declare module "pinia" {
  interface StrategiesItem {
    storage: any;
    paths: string[];
  }
  interface PersistItem {
    enabled: boolean;
    strategies: StrategiesItem[];
  }
  export interface DefineStoreOptionsBase<S, Store> {
    // 允许为任何操作定义毫秒数
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>;
    persist?: PersistItem;
  }
}
