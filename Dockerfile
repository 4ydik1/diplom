FROM ubuntu:latest
LABEL authors="af"

ENTRYPOINT ["top", "-b"]