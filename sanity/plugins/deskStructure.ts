// sanity/plugins/deskStructure.ts

import { FaCogs, FaHome } from 'react-icons/fa'
import { StructureBuilder } from 'sanity/desk'

import home from '../schemas/documents/home'
import settings from '../schemas/documents/settings'

// List of 'documents/schemas' to ignore from Sanity's Desk list.
const pages = [home.name, settings.name]

const deskStructure = (S: StructureBuilder) => {
	return (
		// Sanity desk view
		S.list()
			.title('Contents')

			// Documents listed inside Content
			.items([
				// home schema
				S.listItem()
					.title('Home Page')
					.icon(FaHome)
					.child(S.document().schemaType(home.name).documentId(home.name)),
				S.listItem()
					.title('Site Settings')
					.icon(FaCogs)
					.child(
						S.document().schemaType(settings.name).documentId(settings.name)
					),

				S.divider(),
				// Rest of Documnets

				...S.documentTypeListItems().filter(
					(item) => !pages.includes(item.getId() as (typeof pages)[number])
				),
			])
	)
}
export default deskStructure
