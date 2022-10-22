# !/bin/zsh

minikube start --extra-config=apiserver.service-node-port-range=8000-65535
eval $(minikube -p minikube docker-env)
npm run build:srv1
npm run build:srv2
kubectl apply -f conf.yaml
kubectl apply -f srv1.yaml
kubectl apply -f srv2.yaml
kubectl get deployments
# kubectl get pods
# kubectl logs <pod-name>
