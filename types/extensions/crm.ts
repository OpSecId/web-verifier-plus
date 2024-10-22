

export type HSCode = string;
export type Tract = {
    readonly type?: string;
    readonly id?: string;
    readonly name?: string;
    readonly rights?: string;
    readonly locations?: string;
    readonly description?: string;
    readonly registeredId?: HSCode;
  }

export type UWI = string;

export type Well = {
      readonly type?: string;
      readonly id?: string;
      readonly name?: string;
      readonly description?: string;
      readonly registeredId?: UWI;
    }