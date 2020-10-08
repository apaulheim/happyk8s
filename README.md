# happyk8s

Trying to learn and play around with kubernetes

## :whale: Build your docker image

```bash
cd happyapp
docker build -t happyappimg:latest .
```

## :cloud: Create the Pod

```bash
kubectl create -f podhappyapp.yaml
```

List all pods

```bash
❯ kubectl get pods
NAME          READY   STATUS    RESTARTS   AGE
happyapppod   1/1     Running   0          15s
❯ kubectl get pods -o wide
NAME          READY   STATUS    RESTARTS   AGE     IP          NODE             NOMINATED NODE   READINESS GATES
happyapppod   1/1     Running   0          2m56s   10.1.0.15   docker-desktop   <none>           <none>
```

## :cloud: Deployment

Make the happy app visible to you local machine

Create deployment

```bash
kubectl apply -f deploymenthappyapp.yaml
```

Start the service

```bash
kubectl expose deployment happy-app-deployment --type=NodePort --name=happy-app-service
```

checking

```bash
❯ kubectl get deployments
NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
happy-app-deployment   2/2     2            2           2m33s
❯ kubectl get svc
NAME                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
happy-app-service   NodePort    10.98.227.70   <none>        3000:32508/TCP   76s
kubernetes          ClusterIP   10.96.0.1      <none>        443/TCP          33m
```

Expose Happy App through service.

```bash
kubectl port-forward svc/happy-app-service 81:3000
```

App is now available under http://localhost:81
