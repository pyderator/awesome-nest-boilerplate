module.exports = {
	templates: `${__dirname}/.hygen`,
	helpers: {
		ControllerName(name) {
			return `${this.ClassName(name)}Controller`;
		},
		ServiceName(name) {
			return `${this.ClassName(name)}Service`;
		},
		ModuleName(name) {
			return `${this.ClassName(name)}Module`;
		},
		DtoName(name) {
			return `${this.ClassName(name)}Dto`;
		},
		UpdateDtoName(name) {
			return `Update${this.DtoName(name)}`;
		},
		DtoOptionName(name) {
			return `I${this.DtoName(name)}Options`;
		},
		CreateDtoName(name) {
			return `Create${this.DtoName(name)}`;
		},
		EntityName(name) {
			return `${this.ClassName(name)}Entity`;
		},
		PageOptionsDtoName(name) {
			return this.ClassName(name) + 'PageOptionsDto';
		},
		NotFoundExceptionName(name) {
			return this.ClassName(name) + 'NotFoundException';
		},
		entityFileName(name) {
			return `${this.fileName(name)}.entity`;
		},
		repositoryFileName(name) {
			return `${this.fileName(name)}.repository`;
		},
		getQueryFileName(name) {
			return `get-${this.fileName(name)}.query`;
		},
		controllerFileName(name) {
			return `${this.fileName(name)}.controller`;
		},
		dtoFileName(name) {
			return `${this.fileName(name)}.dto`;
		},
		notFoundExceptionFileName(name) {
			return `${this.fileName(name)}-not-found.exception`;
		},
		createDtoFileName(name) {
			return `create-${this.fileName(name)}.dto`;
		},
		updateDtoFileName(name) {
			return `update-${this.fileName(name)}.dto`;
		},
		pageOptionsDtoFileName(name) {
			return `${this.fileName(name)}-page-options.dto`;
		},
		serviceFileName(name) {
			return `${this.fileName(name)}.service`;
		},
		moduleFileName(name) {
			return `${this.fileName(name)}.module`;
		},
		ClassName(name) {
			return this.changeCase.pascal(name);
		},
		TableName(name) {
			return this.inflection.pluralize(this.inflection.dasherize(name));
		},
		RepositoryName(name) {
			return `${this.ClassName(name)}Repository`;
		},
		moduleName(name) {
			return this.changeCase.camel(name);
		},
		fileName(name) {
			return this.inflection.dasherize(name).toLowerCase();
		},
	},
};
