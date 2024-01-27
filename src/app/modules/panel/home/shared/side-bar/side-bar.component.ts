import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [PanelMenuModule, PanelModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  items: MenuItem[] = [
    {
      label: 'Resumen',
      icon: 'pi pi-fw pi-chart-bar',
    },
    {
      label: 'Calendario',
      icon: 'pi pi-fw pi-calendar',
    },
    {
      label: 'Ingresos y Egresos',
      icon: 'pi pi-fw pi-chart-line',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-eye',
          routerLink: ""
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    },
    {
      label: 'Control de Inventario',
      icon: 'pi pi-fw pi-book',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-eye',
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    },
    {
      label: 'Cuentas por Cobrar',
      icon: 'pi pi-fw pi-credit-card',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-eye',
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    },
    {
      label: 'Inv. Materia Prima',
      icon: 'pi pi-fw pi-shopping-bag',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-eye',
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    },
    {
      label: 'Control de Nomina',
      icon: 'pi pi-fw pi-money-bill',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-eye',
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    },
    {
      label: 'Clientes',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-user-edit',
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-user-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    },
    {
      label: 'Empleados',
      icon: 'pi pi-fw pi-users',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-user-edit',
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-user-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    },
    {
      label: 'Proveedores',
      icon: 'pi pi-fw pi-truck',
      items: [
        {
          label: 'Ver',
          icon: 'pi pi-fw pi-user-edit',
        },
        {
          label: 'Nuevo',
          icon: 'pi pi-fw pi-user-plus',
        },
        {
          label: 'Papelera',
          icon: 'pi pi-fw pi-trash',
        }
      ],
    }
  ];
}
