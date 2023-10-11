import { ConfigurableModuleBuilder, DynamicModule } from '@nestjs/common';

interface ModuleOptions {
    useCasesModule: DynamicModule;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
    new ConfigurableModuleBuilder<ModuleOptions>().build();
