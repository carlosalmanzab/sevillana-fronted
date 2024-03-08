/**
 * Objeto que define las rutas de navegación para la aplicación.
 *
 * @property {Object} routes - Objeto que contiene las rutas de la aplicación.
 */
export const client = {
	routes: {
		auth: {
			/**
			 * Ruta de autenticación.
			 * @property {string} '/auth'
			 */
			path: 'auth',
			/**
			 * Configuración para la página de inicio de sesión.
			 * @property {Object} login
			 * @returns {Object} Objeto con la configuración de la página de inicio de sesión.
			 */
			login: {
				/**
				 * @property {string} login.path - Ruta relativa para la página de inicio de sesión.
				 */
				path: 'login',
				/**
				 * @property {string} login.relative - Ruta relativa (desde la carpeta actual) para la página de inicio de sesión.
				 */
				relative: './login',
				/**
				 * @property {string} login.fullpath - Ruta completa para la página de inicio de sesión.
				 */
				fullpath: '/auth/login',
				/**
				 * @property {string} login.title - Título de la página de inicio de sesión.
				 */
				title: 'Iniciar Sesión'
			},
			/**
			 * Configuración para la página de registro.
			 * @property {Object} register
			 * @returns {Object} Objeto con la configuración de la página de registro.
			 */
			register: {
				/**
				 * @property {string} register.path - Ruta relativa para la página de registro.
				 */
				path: 'register',
				/**
				 * @property {string} register.relative - Ruta relativa (desde la carpeta actual) para la página de registro.
				 */
				relative: './register',
				/**
				 * @property {string} register.fullpath - Ruta completa para la página de registro.
				 */
				fullpath: '/auth/register',
				/*** @property {string} register.title - Título de la página de registro. */
				title: 'Registrarse'
			}
		},
		/**
		 * Configuración para la página home
		 * @property {Object} home
		 * @returns {Object} Objeto con la configuración de la página home.
		 */
		home: {
			/**
			 * @property {string} home.path - Ruta relativa para la página de inicio.
			 */
			path: 'home',
			/**
			 * @property {Object} home.dashboard - Configuración para el dashboard de la página de inicio.
			 */
			dashboard: {
				/**
				 * @property {string} home.dashboard.path - Ruta relativa para el dashboard.
				 */
				path: 'dashboard',
				/**
				 * @property {string} home.dashboard.relative - Ruta relativa (desde la carpeta actual) para el dashboard.
				 */
				relative: './dashboard',
				/**
				 * @property {string} home.dashboard.fullpath - Ruta completa para el dashboard.
				 */
				fullpath: '/home/dashboard',
				/**
				 * @property {string} home.dashboard.title - Título del dashboard.
				 */
				title: 'Dashboard'
			},
			/**
			 * @property {Object} home.calendario - Configuración para el calendario de la página de inicio.
			 */
			calendario: {
				/**
				 * @property {string} home.calendario.path - Ruta relativa para el calendario.
				 */
				path: 'calendario',
				/**
				 * @property {string} home.calendario.relative - Ruta relativa (desde la carpeta actual) para el calendario.
				 */
				relative: './calendario',
				/**
				 * @property {string} home.calendario.fullpath - Ruta completa para el calendario.
				 */
				fullpath: '/home/calendario',
				/**
				 * @property {string} home.calendario.title - Título del calendario.
				 */
				title: 'Calendario'
			},
			/**
			 * @property {Object} home.ingresos_egresos - Configuración para la gestión de ingresos y egresos de la página de inicio.
			 */
			ingresos_egresos: {
				/**
				 * @property {string} home.ingresos_egresos.path - Ruta relativa para la gestión de ingresos y egresos.
				 */
				path: 'ingresos-egresos',
				/**
				 * @property {string} home.ingresos_egresos.relative - Ruta relativa (desde la carpeta actual) para la gestión de ingresos y egresos.
				 */
				relative: './ingresos-egresos',
				/**
				 * @property {string} home.ingresos_egresos.fullpath - Ruta completa para la gestión de ingresos y egresos.
				 */
				fullpath: '/home/ingresos-egresos',
				/**
				 * @property {string} home.ingresos_egresos.title - Título de la gestión de ingresos y egresos.
				 */
				title: 'Ingresos & Egresos'
			},
			/**
			 * @property {Object} home.control_inventario - Configuración para el control de inventario.
			 */
			control_inventario: {
				/**
				 * @property {string} home.control_inventario.path - Ruta relativa para el control de inventario.
				 */
				path: 'control-inventario',
				/**
				 * @property {string} home.control_inventario.relative - Ruta relativa (desde la carpeta actual) para el control de inventario.
				 */
				relative: './control-inventario',
				/**
				 * @property {string} home.control_inventario.fullpath - Ruta completa para el control de inventario.
				 */
				fullpath: '/home/control-inventario',
				/**
				 * @property {string} home.control_inventario.title - Título del control de inventario.
				 */
				title: 'Control de Inventario',
				/**
				 * @property {Object} home.control_inventario.stock - Configuración para el stock del control de inventario.
				 */
				stock: {
					/**
					 * @property {string} home.control_inventario.stock.path - Ruta relativa para el stock.
					 */
					path: 'stock',
					/**
					 * @property {string} home.control_inventario.stock.relative - Ruta relativa (desde la carpeta actual) para el stock.
					 */
					relative: './stock',
					/**
					 * @property {string} home.control_inventario.stock.fullpath - Ruta completa para el stock.
					 */
					fullpath: '/home/control-inventario/stock'
				},
				/**
				 * @property {Object} home.control_inventario.entrada - Configuración para la entrada de inventario.
				 */
				entrada: {
					/**
					 * @property {string} home.control_inventario.entrada.path - Ruta relativa para la entrada de inventario.
					 */
					path: 'entrada',
					/**
					 * @property {string} home.control_inventario.entrada.relative - Ruta relativa (desde la carpeta actual) para la entrada de inventario.
					 */
					relative: './entrada',
					/**
					 * @property {string} home.control_inventario.entrada.relative - Ruta relativa (desde la carpeta actual) para la entrada de inventario.
					 */
					fullpath: '/home/control-inventario/entrada'
				},
				/**
				 * @property {Object} home.control_inventario.salida - Configuración para la salida de inventario.
				 */
				salida: {
					/**
					 * @property {string} home.control_inventario.salida.path - Ruta relativa para la salida de inventario.
					 */
					path: 'salida',
					/**
					 * @property {string} home.control_inventario.salida.relative - Ruta relativa (desde la carpeta actual) para la salida de inventario.
					 */
					relative: './salida',
					/**
					 * @property {string} home.control_inventario.salida.fullpath - Ruta completa para la salida de inventario.
					 */
					fullpath: '/home/control-inventario/salida'
				}
			},
			/**
			 * @property {Object} home.cuentas_cobrar - Configuración para las cuentas por cobrar.
			 */
			cuentas_cobrar: {
				/**
				 * @property {string} home.cuentas_cobrar.path - Ruta relativa para las cuentas por cobrar.
				 */
				path: 'cuentas-cobrar',
				/**
				 * @property {string} home.cuentas_cobrar.relative - Ruta relativa (desde la carpeta actual) para las cuentas por cobrar.
				 */
				relative: './cuentas-cobrar',
				/**
				 * @property {string} home.cuentas_cobrar.fullpath - Ruta completa para las cuentas por cobrar.
				 */
				fullpath: '/home/cuentas-cobrar',
				/**
				 * @property {string} home.cuentas_cobrar.title - Título de las cuentas por cobrar.
				 */
				title: 'Cuentas por Cobrar'
			},
			/**
			 * @property {Object} home.inventario_materia_prima - Configuración para el inventario de materia prima.
			 */
			inventario_materia_prima: {
				/**
				 * @property {string} home.inventario_materia_prima.path - Ruta relativa para el inventario de materia prima.
				 */
				path: 'inventario-materia-prima',
				/**
				 * @property {string} home.inventario_materia_prima.relative - Ruta relativa (desde la carpeta actual) para el inventario de materia prima.
				 */
				relative: './inventario-materia-prima',
				/**
				 * @property {string} home.inventario_materia_prima.fullpath - Ruta completa para el inventario de materia prima.
				 */
				fullpath: '/home/inventario-materia-prima',
				/**
				 * @property {string} home.inventario_materia_prima.title - Título del inventario de materia prima.
				 */
				title: 'Inv. Materia Prima',
				/**
				 * @property {Object} home.inventario_materia_prima.stock - Configuración para el stock del inventario de materia prima.
				 */
				stock: {
					/**
					 * @property {string} home.inventario_materia_prima.stock.path - Ruta relativa para el stock.
					 */
					path: 'stock',
					/**
					 * @property {string} home.inventario_materia_prima.stock.relative - Ruta relativa (desde la carpeta actual) para el stock.
					 */
					relative: './stock',
					/**
					 * @property {string} home.inventario_materia_prima.stock.fullpath - Ruta completa para el stock.
					 */
					fullpath: '/home/inventario-materia-prima/stock'
				},
				/**
				 * @property {Object} home.inventario_materia_prima.entrada - Configuración para la entrada de materia prima.
				 */
				entrada: {
					/**
					 * @property {string} home.inventario_materia_prima.entrada.path - Ruta relativa para la entrada de materia prima.
					 */
					path: 'entrada',
					/**
					 * @property {string} home.inventario_materia_prima.entrada.relative - Ruta relativa (desde la carpeta actual) para la entrada de materia prima.
					 */
					relative: './entrada',
					/**
					 * @property {string} home.inventario_materia_prima.entrada.fullpath - Ruta completa para la entrada de materia prima.
					 */
					fullpath: '/home/inventario-materia-prima/entrada'
				},
				/**
				 * @property {Object} home.inventario_materia_prima.salida - Configuración para la salida de materia prima.
				 */
				salida: {
					/**
					 * @property {string} home.inventario_materia_prima.salida.path - Ruta relativa para la salida de materia prima.
					 */
					path: 'salida',
					/**
					 * @property {string} home.inventario_materia_prima.salida.relative - Ruta relativa (desde la carpeta actual) para la salida de materia prima.
					 */
					relative: './salida',
					/**
					 * @property {string} home.inventario_materia_prima.salida.fullpath - Ruta completa para la salida de materia prima.
					 */
					fullpath: '/home/inventario-materia-prima/salida'
				}
			},
			/**
			 * @property {Object} home.control_nomina - Configuración para el control de nómina.
			 */
			control_nomina: {
				/**
				 * @property {string} home.control_nomina.path - Ruta relativa para el control de nómina.
				 */
				path: 'control-nomina',
				/**
				 * @property {string} home.control_nomina.relative - Ruta relativa (desde la carpeta actual) para el control de nómina.
				 */
				relative: './control-nomina',
				/**
				 * @property {string} home.control_nomina.fullpath - Ruta completa para el control de nómina.
				 */
				fullpath: '/home/control-nomina',
				/**
				 * @property {string} home.control_nomina.title - Título del control de nómina.
				 */
				title: 'Control de Nomina'
			},
			/**
			 * @property {Object} home.clientes - Configuración para la gestión de clientes.
			 */
			clientes: {
				/**
				 * @property {string} home.clientes.path - Ruta relativa para la gestión de clientes.
				 */
				path: 'clientes',
				/**
				 * @property {string} home.clientes.relative - Ruta relativa (desde la carpeta actual) para la gestión de clientes.
				 */
				relative: './clientes',
				/**
				 * @property {string} home.clientes.fullpath - Ruta completa para la gestión de clientes.
				 */
				fullpath: '/home/clientes',
				/**
				 * @property {string} home.clientes.title - Título de la gestión de clientes.
				 */
				title: 'Clientes'
			},
			/**
			 * @property {Object} empleados - Configuración para la gestión de empleados.
			 */
			empleados: {
				/**
				 * @property {string} empleados.path - Ruta relativa para la gestión de empleados.
				 */
				path: 'empleados',
				/**
				 * @property {string} empleados.relative - Ruta relativa (desde la carpeta actual) para la gestión de empleados.
				 */
				relative: './empleados',
				/**
				 * @property {string} empleados.fullpath - Ruta completa para la gestión de empleados.
				 */
				fullpath: '/home/empleados',
				/**
				 * @property {string} empleados.title - Título de la gestión de empleados.
				 */
				title: 'Empleados'
			},
			/**
			 * @property {Object} proveedores - Configuración para la gestión de proveedores.
			 */
			proveedores: {
				/**
				 * @property {string} proveedores.path - Ruta relativa para la gestión de proveedores.
				 */
				path: 'proveedores',
				/**
				 * @property {string} proveedores.relative - Ruta relativa (desde la carpeta actual) para la gestión de proveedores.
				 */
				relative: './proveedores',
				/**
				 * @property {string} proveedores.fullpath - Ruta completa para la gestión de proveedores.
				 */
				fullpath: '/home/proveedores',
				/**
				 * @property {string} proveedores.title - Título de la gestión de proveedores.
				 */
				title: 'Proveedores'
			}
		}
	}
};
