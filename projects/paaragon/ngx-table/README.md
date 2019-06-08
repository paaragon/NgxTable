# NgxTable

![build status](https://api.travis-ci.org/paaragon/NgxTable.svg?branch=master)

This library offers an Angular component that allows you to display your data in a table.

## DEMO

[Try it out!](https://paaragon.github.io/NgxTable/)

![demo gif](https://raw.githubusercontent.com/paaragon/NgxTable/master/doc-assets/ngx-table.gif)

This table handles different events that can be implemented by the developers that use it.

The events are the following:

- [Sort](https://github.com/paaragon/NgxTable/wiki/Sort)
- [Filter](https://github.com/paaragon/NgxTable/wiki/Filter)
- [Create](https://github.com/paaragon/NgxTable/wiki/Create)
- [Edit](https://github.com/paaragon/NgxTable/wiki/Edit)
- [Delete](https://github.com/paaragon/NgxTable/wiki/Delete)
- [Pagination](https://github.com/paaragon/NgxTable/wiki/Pagination)

Other features:

- Field validation
- Filter operators
- Autocomplete [WIP]

## Instalation

`npm install --save @paaragon/ngx-table`

## Dependencies

- Font awesome:

`npm i font-awesome`

On your `angular.json`

```json
"styles": [
  "node_modules/font-awesome/css/font-awesome.min.css",
  "src/styles.scss"
],
```

## Include

```typescript
// ...
import { NgxTableModule } from '@paaragon/ngx-table';

@NgModule({
  // ...
  imports: [
    // ...
    NgxTableModule,
  ],
  // ...
})
export class AppModule { }
```

## Usage

Your component.ts

```typescript
const exampleData: any[] = [
    { name: 'Delbert', lastname: 'Keeling', birthdate: new Date(1990, 1, 21), company: 'Gislason, Braun and Kerluke', salary: 30432 },
    { name: 'Karine', lastname: 'Rice', birthdate: new Date(1982, 3, 1), company: 'Thiel - Connelly', salary: 29188 },
    { name: 'Rachelle', lastname: 'Flatley', birthdate: new Date(1985, 10, 16), company: 'Bradtke, Donnelly and Gottlieb', salary: 27026 },
    { name: 'Gardner', lastname: 'Lindgren', birthdate: new Date(1982, 9, 20), company: 'Crist - Klein', salary: 52676 }
];
```

Youe component.html
```html
<ngx-table [data]="exampleData"></ngx-table>
```

[Read the full docs here](https://github.com/paaragon/NgxTable/wiki)