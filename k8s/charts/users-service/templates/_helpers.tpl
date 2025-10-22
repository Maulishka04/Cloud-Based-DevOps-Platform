{{- define "users-service.fullname" -}}
{{- printf "%s-%s" .Release.Name "users-service" -}}
{{- end -}}

{{- define "users-service.name" -}}
{{- "users-service" -}}
{{- end -}}
