import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

function PressPage({location}) {
    const cv = require('../../data/general.json').cv

  return (
    <Layout location={location} crumbLabel="Mi CV">
        <section>
            <div
            class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
            >
                <div class="mx-auto max-w-4xl text-center">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        CV QA LIZBET VILLASEÑOR VINAGRE
                    </h1>
                    <p class="mt-4 text-lg">
                    ✨ Apoyo a la mejora del software con mis habilidades para detectar inconsistencias funcionales y visuales. 
                    ✨ He participado en análisis y pruebas estáticas/dinámicas, desarrollo de métricas, informes de ejecución, Dailys, Walktrough, HotFix y clasificación de errores.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div className="max-w-6xl mx-auto pb-16 px-4 flex">
                <div class="space-y-4 w-full">
                    <ul>
                        { 
                            documents.map(item => <li class="list-disc mb-4"><a class="text-sky-400 hover:text-sky-500 hover:underline" href={item.path}>{item.name}</a></li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    </Layout>
  )
}