export interface Store {
    storeID:    number;
    storeName:  string;
    isActive:   boolean;
    images:     ImgStore;
}

export interface ImgStore {
    banner: string;
    logo:   string;
    icon:   string;
}