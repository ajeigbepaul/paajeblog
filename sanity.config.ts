import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import { getDefaultDocumentNode } from './structure'

export default defineConfig({
  basePath:"/studio",
  name: 'PAAJE_content_studio',
  title: 'PAAJE Content studio',

  projectId:"1j6yn8b7",
  dataset:"production",

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      // logo:Logo,
      navbar:StudioNavbar
    }
  },
  theme: myTheme
})
