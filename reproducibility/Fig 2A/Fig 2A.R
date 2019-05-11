# Code to reliably reproduce (interactive) Fig 2A

library(plotly)

filename = 'D:/eLife Ambassador/Readability Initiative/01 - Cryptic Genetic Variation/Supplementary Data from paper/Plots/Fig 2A.csv'
data = read.delim(filename, header=TRUE, sep=',')

# Plot a scatter of each library
font <- list(family = "Arial", size = 16)
x = list(title="Library", titlefont = font, ticks="outside", tickvals = 1:6, ticktext = rep(as.character(unique(data$Labels)), 2))
y = list(title="Fold change in fitness (Variant/WT)", type = "log", range = c(-1, 2), titlefont=font, ticks="outside")
color_palette = as.character(unique(data$Color))

p = plot_ly(data=data) %>%
    add_trace(x= ~jitter(as.numeric(Library)),
              y = ~Fitness.change.in.PMH.activity, 
              color = ~Library,
              colors=color_palette, 
              type='scatter',
              mode = 'markers',
              marker = list(size=7),
              hoverinfo = 'text',
              hovertext = ~paste('<b>Ortholog: </b>', Ortholog, 
                                 '<b><br> Library: </b>', Lib.No, 
                                 '<b><br> Fold Change Fitness: </b>', Fitness.change.in.PMH.activity,
                                 '<b><br> Mutations: </b>', Mutation)) %>%
    layout(p, xaxis=x, yaxis=y, showlegend = FALSE)

p