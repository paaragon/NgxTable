# NgxTable

NgxTable is an angular component that shows your data in a table and allows you to control the most common events.

## Events

- Order
- Filter (WIP)
- Create (WIP)
- Delete (WIP)
- Edit (WIP)

## Usage

In the basic usage you just have to pass your data as a component input

```typescript
const exampleData: any[] = [
    { name: 'Delbert', lastname: 'Keeling', birthdate: new Date(1990, 1, 21), company: 'Gislason, Braun and Kerluke', salary: 30432 },
    { name: 'Karine', lastname: 'Rice', birthdate: new Date(1982, 3, 1), company: 'Thiel - Connelly', salary: 29188 },
    { name: 'Rachelle', lastname: 'Flatley', birthdate: new Date(1985, 10, 16), company: 'Bradtke, Donnelly and Gottlieb', salary: 27026 },
    { name: 'Gardner', lastname: 'Lindgren', birthdate: new Date(1982, 9, 20), company: 'Crist - Klein', salary: 52676 }
];
```
```html
<ngx-table [data]="exampleData"></ngx-table>
```

![simple table](./doc-assets/simple-table.PNG)

## Config

This component manage a configuration object with the following structure (WIP):

```typescript
export type NgxTableConfig = {
    order?: {
        enable?: boolean 
    },
    filter?: {
        enable?: boolean
    }
};
```

## Order

When order feature is enable, you can click a header to emit the order event.

### Bind order event

```html
<!-- in your html -->
<ngx-table [data]="exampleData" (order)="onOrder($event)"></ngx-table>
```

```typescript
// in your component .ts
onOrder(order: NgxTableOrder) {
    // your order logic
}
```

### NgxTableOrder type

```typescript
export type NgxTableOrder = {
    field: string,
    direction: 1 | -1
};
```
- **field**: column name to order
- **direction**: 1 = ASC, -1 = DESC