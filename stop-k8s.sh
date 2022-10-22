# !/bin/zsh

kubectl delete --all deployments --namespace=default
kubectl delete --all pods --namespace=default
kubectl delete --all services --namespace=default
minikube stop