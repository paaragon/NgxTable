# NgxTable

![build status](https://api.travis-ci.org/paaragon/NgxTable.svg?branch=master)

This library offers an Angular component that allows you to display your data in a table.

## DEMO

![demo gif](https://raw.githubusercontent.com/paaragon/NgxTable/master/doc-assets/ngx-table.gif)

This table handles different events that can be implemented by the developers that use it.

The events are the following:

- [Sort](https://github.com/paaragon/NgxTable/wiki/Sort)
- [Filter](https://github.com/paaragon/NgxTable/wiki/Filter)
- [Create](https://github.com/paaragon/NgxTable/wiki/Create)
- [Edit](https://github.com/paaragon/NgxTable/wiki/Edit)
- [Delete](https://github.com/paaragon/NgxTable/wiki/Delete)
- [Pagination](https://github.com/paaragon/NgxTable/wiki/Pagination)

## Instalation

`npm install --save @paaragon/ngx-table`

## Dependencies

[WIP]

## Usage

```typescript
// component.ts
const exampleData: any[] = [
    { name: 'Delbert', lastname: 'Keeling', birthdate: new Date(1990, 1, 21), company: 'Gislason, Braun and Kerluke', salary: 30432 },
    { name: 'Karine', lastname: 'Rice', birthdate: new Date(1982, 3, 1), company: 'Thiel - Connelly', salary: 29188 },
    { name: 'Rachelle', lastname: 'Flatley', birthdate: new Date(1985, 10, 16), company: 'Bradtke, Donnelly and Gottlieb', salary: 27026 },
    { name: 'Gardner', lastname: 'Lindgren', birthdate: new Date(1982, 9, 20), company: 'Crist - Klein', salary: 52676 }
];
```
```html
<!-- component.html -->
<ngx-table [data]="exampleData"></ngx-table>
```

### Events

#### Sort

```html
<!-- your component.html -->
<ngx-table [data]="exampleData" (sort)="onSort($event)"></ngx-table>
```

```typescript
// your component.ts
onSort(order: NgxTableOrder) {
 // your sort logic
}
```

```typescript
interface NgxTableOrder {
    field: string;
    direction: 1 | -1;
}
```

[Sort documentation](https://github.com/paaragon/NgxTable/wiki/Sort)

#### Filter

```html
<!-- your component.html -->
<ngx-table [data]="exampleData" (filter)="onFilter($event)"></ngx-table>
```

```typescript
// your component.ts
onSort(order: NgxTableFilter ) {
 // your filter logic
}
```

```typescript
interface NgxTableFilter {
    [key: string]: { operator: NgxTableOperator, value: string };
}
```

[Filter documentation](https://github.com/paaragon/NgxTable/wiki/Filter)

#### Create

```html
<!-- your component.html -->
<ngx-table [data]="exampleData" (create)="onCreate($event)"></ngx-table>
```

```typescript
// your component.ts
onSort(order: NgxTableNew) {
 // your create logic
}
```

```typescript
interface NgxTableNew {
    [key: string]: any;
}
```

[Create documentation](https://github.com/paaragon/NgxTable/wiki/https://github.com/paaragon/NgxTable/wiki/Create)

#### Edit

```html
<!-- your component.html -->
<ngx-table [data]="exampleData" (edit)="onEdit($event)"></ngx-table>
```

```typescript
// your component.ts
onSort(order: NgxTableEdition) {
 // your edition logic
}
```

```typescript
interface NgxTableEdition {
    index: number;
    row: any;
}
```

[Edit documentation](https://github.com/paaragon/NgxTable/wiki/Edit)

#### Delete

```html
<!-- your component.html -->
<ngx-table [data]="exampleData" (delete)="onDelete($event)"></ngx-table>
```

```typescript
// your component.ts
onSort(index: number) {
 // your delete logic
}
```

[Delete documentation](https://github.com/paaragon/NgxTable/wiki/Delete)

#### Pagination

[WIP]

## Config

You can provide a config object to customize your table.

```html
<!-- your component.html -->
<ngx-table [data]="exampleData" [config]="config"></ngx-table>
```

```typescript
// Config interface
interface NgxTableConfig {
    placeholders?: NgxTablePlaceholders;
    sort?: {
        enable?: boolean
    };
    filter?: {
        enable: boolean,
        debounceTime?: number,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg: string
            }
        },
        lock?: string[],
        operators?: NgxTableOperator[]
    };
    create?: {
        enable: boolean,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg: string
            }
        },
        lock?: string[]
    };
    delete?: {
        enable: boolean
    };
    edit?: {
        enable: boolean,
        longContent?: number,
        lock?: string[]
    };
}
```

[Config documentation](https://github.com/paaragon/NgxTable/wiki/Config)
