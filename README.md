# kuberdemo
Playground to learn docker/k8s.<br>
This project includes two almost identical tiny http servers srv1 and srv2. They constantly poll each other, so we can test and play with two services/pods + ConfigMap setup.

## prerequisites
- docker (https://hub.docker.com/search?q=&type=edition&offering=community&sort=updated_at&order=desc)
- minikube (https://minikube.sigs.k8s.io/docs/start/)
- node 16
- zsh (or just change in *.sh files to bash or sh)

## setup
npm i
start-k8s.sh

After initial setup you should have minikube running with two services inside: srv1-service and srv2-service.
Type `kubectl get pods` to verify that pods are running and get their names. Then run `kubectl logs <pod name>` - you should see something like
``` 
Started SRV1, port 8081! 🚀
env srv2-url <host name>
url http://<host name>:8082
Hello, World from SRV 222 !
Hello, World from SRV 222 !
...
```
