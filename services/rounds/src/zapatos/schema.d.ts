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
   * **rounds**
   * - Table in database
   */
  export namespace rounds {
    export type Table = 'rounds';
    export interface Selectable {
      /**
      * **rounds.match_id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      match_id: number;
      /**
      * **rounds.round_nb**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      round_nb: number;
      /**
      * **rounds.status**
      * - `text` in database
      * - Nullable, no default
      */
      status: string | null;
      /**
      * **rounds.p1**
      * - `int4` in database
      * - Nullable, no default
      */
      p1: number | null;
      /**
      * **rounds.p2**
      * - `int4` in database
      * - Nullable, no default
      */
      p2: number | null;
      /**
      * **rounds.monstre_p1**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p1: number | null;
      /**
      * **rounds.monstre_p2**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p2: number | null;
      /**
      * **rounds.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at: Date | null;
      /**
      * **rounds.ended_at**
      * - `date` in database
      * - Nullable, no default
      */
      ended_at: Date | null;
      /**
      * **rounds.winner**
      * - `int4` in database
      * - Nullable, no default
      */
      winner: number | null;
    }
    export interface JSONSelectable {
      /**
      * **rounds.match_id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      match_id: number;
      /**
      * **rounds.round_nb**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      round_nb: number;
      /**
      * **rounds.status**
      * - `text` in database
      * - Nullable, no default
      */
      status: string | null;
      /**
      * **rounds.p1**
      * - `int4` in database
      * - Nullable, no default
      */
      p1: number | null;
      /**
      * **rounds.p2**
      * - `int4` in database
      * - Nullable, no default
      */
      p2: number | null;
      /**
      * **rounds.monstre_p1**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p1: number | null;
      /**
      * **rounds.monstre_p2**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p2: number | null;
      /**
      * **rounds.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at: db.DateString | null;
      /**
      * **rounds.ended_at**
      * - `date` in database
      * - Nullable, no default
      */
      ended_at: db.DateString | null;
      /**
      * **rounds.winner**
      * - `int4` in database
      * - Nullable, no default
      */
      winner: number | null;
    }
    export interface Whereable {
      /**
      * **rounds.match_id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      match_id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.round_nb**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      round_nb?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.status**
      * - `text` in database
      * - Nullable, no default
      */
      status?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.p1**
      * - `int4` in database
      * - Nullable, no default
      */
      p1?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.p2**
      * - `int4` in database
      * - Nullable, no default
      */
      p2?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.monstre_p1**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p1?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.monstre_p2**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p2?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.ended_at**
      * - `date` in database
      * - Nullable, no default
      */
      ended_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **rounds.winner**
      * - `int4` in database
      * - Nullable, no default
      */
      winner?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **rounds.match_id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      match_id: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **rounds.round_nb**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      round_nb: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **rounds.status**
      * - `text` in database
      * - Nullable, no default
      */
      status?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **rounds.p1**
      * - `int4` in database
      * - Nullable, no default
      */
      p1?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **rounds.p2**
      * - `int4` in database
      * - Nullable, no default
      */
      p2?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **rounds.monstre_p1**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p1?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **rounds.monstre_p2**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p2?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **rounds.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment;
      /**
      * **rounds.ended_at**
      * - `date` in database
      * - Nullable, no default
      */
      ended_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment;
      /**
      * **rounds.winner**
      * - `int4` in database
      * - Nullable, no default
      */
      winner?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **rounds.match_id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      match_id?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **rounds.round_nb**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      round_nb?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **rounds.status**
      * - `text` in database
      * - Nullable, no default
      */
      status?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **rounds.p1**
      * - `int4` in database
      * - Nullable, no default
      */
      p1?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **rounds.p2**
      * - `int4` in database
      * - Nullable, no default
      */
      p2?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **rounds.monstre_p1**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p1?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **rounds.monstre_p2**
      * - `int4` in database
      * - Nullable, no default
      */
      monstre_p2?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **rounds.created_at**
      * - `date` in database
      * - Nullable, no default
      */
      created_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **rounds.ended_at**
      * - `date` in database
      * - Nullable, no default
      */
      ended_at?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **rounds.winner**
      * - `int4` in database
      * - Nullable, no default
      */
      winner?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = 'rounds_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = rounds.Table;
    export type Selectable = rounds.Selectable;
    export type JSONSelectable = rounds.JSONSelectable;
    export type Whereable = rounds.Whereable;
    export type Insertable = rounds.Insertable;
    export type Updatable = rounds.Updatable;
    export type UniqueIndex = rounds.UniqueIndex;
    export type Column = rounds.Column;
  
    export type AllBaseTables = [rounds.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [rounds.Table];
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
    "rounds": rounds.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "rounds": rounds.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "rounds": rounds.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "rounds": rounds.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "rounds": rounds.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "rounds": rounds.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "rounds": rounds.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "rounds": rounds.SQL;
  }[T];

}
