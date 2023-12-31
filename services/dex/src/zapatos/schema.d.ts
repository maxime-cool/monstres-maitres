/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2023 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **monstres**
   * - Table in database
   */
  export namespace monstres {
    export type Table = 'monstres';
    export interface Selectable {
      /**
      * **monstres.dex_ref**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      dex_ref: number;
      /**
      * **monstres.description**
      * - `text` in database
      * - Nullable, no default
      */
      description: string | null;
      /**
      * **monstres.base_power**
      * - `int4` in database
      * - Nullable, no default
      */
      base_power: number | null;
      /**
      * **monstres.base_price**
      * - `int4` in database
      * - Nullable, no default
      */
      base_price: number | null;
    }
    export interface JSONSelectable {
      /**
      * **monstres.dex_ref**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      dex_ref: number;
      /**
      * **monstres.description**
      * - `text` in database
      * - Nullable, no default
      */
      description: string | null;
      /**
      * **monstres.base_power**
      * - `int4` in database
      * - Nullable, no default
      */
      base_power: number | null;
      /**
      * **monstres.base_price**
      * - `int4` in database
      * - Nullable, no default
      */
      base_price: number | null;
    }
    export interface Whereable {
      /**
      * **monstres.dex_ref**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      dex_ref?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **monstres.description**
      * - `text` in database
      * - Nullable, no default
      */
      description?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **monstres.base_power**
      * - `int4` in database
      * - Nullable, no default
      */
      base_power?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **monstres.base_price**
      * - `int4` in database
      * - Nullable, no default
      */
      base_price?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **monstres.dex_ref**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      dex_ref: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **monstres.description**
      * - `text` in database
      * - Nullable, no default
      */
      description?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **monstres.base_power**
      * - `int4` in database
      * - Nullable, no default
      */
      base_power?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **monstres.base_price**
      * - `int4` in database
      * - Nullable, no default
      */
      base_price?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **monstres.dex_ref**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      dex_ref?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **monstres.description**
      * - `text` in database
      * - Nullable, no default
      */
      description?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **monstres.base_power**
      * - `int4` in database
      * - Nullable, no default
      */
      base_power?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **monstres.base_price**
      * - `int4` in database
      * - Nullable, no default
      */
      base_price?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = 'monstres_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = monstres.Table;
    export type Selectable = monstres.Selectable;
    export type JSONSelectable = monstres.JSONSelectable;
    export type Whereable = monstres.Whereable;
    export type Insertable = monstres.Insertable;
    export type Updatable = monstres.Updatable;
    export type UniqueIndex = monstres.UniqueIndex;
    export type Column = monstres.Column;
  
    export type AllBaseTables = [monstres.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [monstres.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "monstres": monstres.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "monstres": monstres.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "monstres": monstres.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "monstres": monstres.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "monstres": monstres.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "monstres": monstres.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "monstres": monstres.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "monstres": monstres.SQL;
  }[T];

}
