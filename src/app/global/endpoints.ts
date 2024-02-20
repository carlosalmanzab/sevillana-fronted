export const client = {
	routes: {
		auth: {
			path: '/auth',
			login: '/auth/login',
			register: '/auth/register'
		},
		home: {
			path: '/home',
			dashboard: {
				path: 'dashboard',
				relative: './dashboard',
				fullpath: '/home/dashboard'
			},
			calendar: {
				path: 'calendar',
				relative: './calendar',
				fullpath: '/home/calendar'
			},
			ingresos_egresos: {
				path: 'ingresos-egresos',
				relative: './ingresos-egresos',
				fullpath: '/home/ingresos-egresos'
			},
			control_inventario: {
				path: 'control-inventario',
				relative: './control-inventario',
				fullpath: '/home/control-inventario',
				stock: {
					path: 'stock',
					relative: './stock',
					fullpath: '/home/control-inventario/stock'
				},
				entrada: {
					path: 'entrada',
					relative: './entrada',
					fullpath: '/home/control-inventario/entrada'
				},
				salida: {
					path: 'salida',
					relative: './salida',
					fullpath: '/home/control-inventario/salida'
				}
			}
		}
	}
};
