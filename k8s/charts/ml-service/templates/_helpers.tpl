{{- define "ml-service.fullname" -}}
{{- printf "%s-%s" .Release.Name "ml-service" -}}
{{- end -}}

{{- define "ml-service.name" -}}
{{- "ml-service" -}}
{{- end -}}
