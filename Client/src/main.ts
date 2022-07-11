import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'//../node_modules/
import { AppModule } from './app/app.module'
const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)